import React from 'react';
import { useNavigate } from 'react-router-dom';
import useFetchData from '../hooks/useFetchData';
import styled from 'styled-components';

interface Provider {
  id: string;
  name: string;
}
const Button = styled.button`
  background-color: transparent;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  width: 100%;
  text-align: left;

  &:hover {
    background-color: #0056b3;
  }
`;
const ListCom = styled.li`
  background-color: transparent;
  color: white;
  border: none;
  padding: 0;
  cursor: pointer;
  border-radius: 5px;
  list-style: none;
`;
const ListComUL = styled.ul`
  background-color: transparent;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
`;
const SideBar: React.FC = () => {
  const navigate = useNavigate();
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

  return (
    <>
      <h2>Select Providers</h2>
      <ListComUL>
        {Array.isArray(providers) &&
          providers.map((provider: Provider) => (
            <ListCom key={provider.id}>
              <Button onClick={() => onSelectProvider(provider)}>
                {provider.name}
              </Button>
            </ListCom>
          ))}
      </ListComUL>
    </>
  );
};

export default SideBar;
