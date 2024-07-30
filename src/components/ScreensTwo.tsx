import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ScreensOne from './ScreensOne';
import {
  Container,
  ApiCard,
  ApiImage,
  ApiTitle,
  ApiTitleh3,
  ApiP,
} from './ScreensTwoStyle';
import { ApiResponse } from '../types/apiInterface';

const ScreensTwo: React.FC = () => {
  const { providerName } = useParams<{ providerName: string }>();
  const [apis, setApis] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAPIs = async () => {
      if (providerName) {
        try {
          const response = await fetch(
            `https://api.apis.guru/v2/${providerName}.json`,
          );
          if (!response.ok) throw new Error('Network response was not ok');
          const data: ApiResponse = await response.json();
          setApis(data);
        } catch (error) {
          if (error instanceof Error) {
            setError(error.message);
          } else {
            setError('An unknown error occurred');
          }
        } finally {
          setLoading(false);
        }
      }
    };

    fetchAPIs();
  }, [providerName]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <Container>
      {apis ? (
        <div>
          {Object.keys(apis.apis).map((apiKey) => (
            <ApiCard key={apiKey}>
              <ApiTitle>
                {apis.apis[apiKey].info['x-logo'] && (
                  <ApiImage
                    src={apis.apis[apiKey].info['x-logo'].url}
                    alt={`${apis.apis[apiKey].info.title} logo`}
                    style={{
                      width: '50px',
                      height: '50px',
                      marginRight: '10px',
                    }}
                  />
                )}
                {apis.apis[apiKey].info.title}
              </ApiTitle>
              <ApiTitleh3>Description</ApiTitleh3>
              <ApiP>{apis.apis[apiKey].info.description}</ApiP>
              <ApiTitleh3>Swagger:</ApiTitleh3>
              <ApiP>{apis.apis[apiKey].swaggerUrl}</ApiP>
              <ApiTitleh3>Contact:</ApiTitleh3>
              <ApiP>Email : {apis.apis[apiKey].info.contact?.email}</ApiP>
              <ApiP>Name : {apis.apis[apiKey].info.contact?.name}</ApiP>
              <ApiP>Url : {apis.apis[apiKey].info.contact?.url}</ApiP>
            </ApiCard>
          ))}
        </div>
      ) : (
        <p>No API details available</p>
      )}
      <ScreensOne />
    </Container>
  );
};

export default ScreensTwo;
