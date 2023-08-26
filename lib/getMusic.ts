export default async function getMusic(filter: FilterType) {
  const customPath =
    "?" +
    new URLSearchParams({
      ...filter,
      offset: filter?.offset?.toString(),
      limit: filter?.limit?.toString(),
      songid: filter?.songid?.toString(),
    })?.toString();

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL as string}getSongs${customPath}`,
    {
      method: "GET",
      next: {
        revalidate: 60,
      },
    }
  );

  const { data, status } = await response.json();

  if (status === 200) {
    return { data, isSuccess: true };
  }
  return { data, isSuccess: false };
}
