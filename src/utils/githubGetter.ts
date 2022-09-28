import axios from 'axios';

export default async function githubGetter(url: string) {
  // fetch with axios
  const { data } = await axios.get(url);
  return data;
}
