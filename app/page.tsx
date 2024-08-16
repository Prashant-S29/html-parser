'use client';

import React, { useEffect, useState } from 'react';
import { useFetchEncodedHtml } from '@/utils/fetchEncodedHtml';

const Page = () => {
  const { data, isLoading } = useFetchEncodedHtml();
  const [translatedText, setTranslatedText] = useState<string>('');
  const [isTextTranslated, setIsTextTranslated] = useState<boolean>(false);

  useEffect(() => {
    if (!data) {
      return;
    }

    const translateData = async () => {
      try {
        // Call the API route to translate the text
        const response = await fetch('/api/translate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            text: data[0].content.rendered, // The HTML content to translate
            sourceLang: 'en',
            targetLang: 'ru',
          }),
        });

        const result = await response.json();
        setTranslatedText(result.translation);
        setIsTextTranslated(true);
      } catch (error) {
        console.error('Error translating text:', error);
      }
    };

    translateData();
  }, [data]);

  return (
    <div>
      <h1>Hello World!</h1>
      {isLoading || !isTextTranslated ? (
        <p>Loading...</p>
      ) : (
        <>
          {data && (
            <div
              dangerouslySetInnerHTML={{
                __html: translatedText,
              }}
            ></div>
          )}
        </>
      )}
    </div>
  );
};

export default Page;
