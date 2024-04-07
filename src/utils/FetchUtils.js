export const MSG_HTML_FAILED_TO_LOAD = {
  source: {
    html: '<h1>Failed to load content</h1><p>Check your internet connection and try again.</p>',
  },
};

export const getVerseOfTheDay = async () => {
  const response = await fetch(
    'https://beta.ourmanna.com/api/v1/get/?format=json',
  );
  const data = await response.json();
  return {
    citation: data.verse.details.reference,
    passage: data.verse.details.text,
  };
};

export const getPrayerOfTheDay = () => {
  const today = new Date();
  const startOfYear = new Date(today.getFullYear(), 0, 0);
  const diff = today - startOfYear;
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = toString(Math.floor(diff / oneDay)).padStart(3, '0');
  return {
    source: {
      uri: `https://www.heartlight.org/cgi-shl/praying_paul/pwp.pl?${dayOfYear}`,
      headers: { 'Content-Type': 'text/html' },
    },
  };
};

export const getDevoOfTheDay = () => {
  return {
    source: {
      uri: 'https://www.heartlight.org/ghf/en/',
      headers: { 'Content-Type': 'text/html' },
    },
  };
};
