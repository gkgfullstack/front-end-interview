import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useFetchData from '../hooks/useFetchData';
import { Provider } from '../types/apiInterface';
import {
  ListCom,
  Button,
  ListComUL,
  ApiTitle,
  ButtonArrow,
  ButtonSVG,
  ApiTitleButton,
} from './SideBarStyle';

const SideBar: React.FC = () => {
  const navigate = useNavigate();
  const [showTitle, setShowTitle] = useState<string | null>(null);
  const providersURL = 'https://api.apis.guru/v2/providers.json';
  const {
    data: providersData,
    loading: providersLoading,
    error: providersError,
  } = useFetchData<{ [key: string]: Provider }>(providersURL);
  const providers = providersData
    ? Object.values(providersData.data).map((key) => ({ id: key, name: key }))
    : [];

  const onSelectProvider = (provider: Provider): void => {
    navigate(`/providers/${provider.id}`);
  };

  if (providersLoading) return <div>Loading providers...</div>;

  if (providersError) {
    const errorMessage =
      providersError instanceof Error
        ? providersError.message
        : 'Unknown error';
    return <div>Error loading providers: {errorMessage}</div>;
  }

  const showtitleHandler = (id: string) => {
    setShowTitle((itemId) => (itemId === id ? null : id));
  };
  return (
    <>
      <ApiTitle>Select Providers</ApiTitle>
      <ListComUL>
        {Array.isArray(providers) &&
          providers.map((provider: Provider) => (
            <ListCom key={provider.id}>
              <ButtonArrow onClick={() => showtitleHandler(provider.id)}>
                {provider.id === showTitle ? (
                  <ButtonSVG
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 14l5-5 5 5H7z" fill="#000000" />
                  </ButtonSVG>
                ) : (
                  <ButtonSVG
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 10l5 5 5-5H7z" />
                  </ButtonSVG>
                )}
              </ButtonArrow>
              <Button onClick={() => onSelectProvider(provider)}>
                {provider.name}
              </Button>
              <ApiTitleButton>
                {provider.id === showTitle && provider.name}
              </ApiTitleButton>
            </ListCom>
          ))}
      </ListComUL>
    </>
  );
};

export default SideBar;
