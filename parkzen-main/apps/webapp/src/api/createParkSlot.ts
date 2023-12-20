const apiHost = process.env.REACT_APP_API_HOST;

type createParkSlotBody = {
  firstName: string;
  lastName: string;
  priceForOneHour: number;
};

async function createParkSlot(body: createParkSlotBody) {
  const requestPath = "/parks";
  const url = new URL(`${apiHost}${requestPath}`);

  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  const requestInit: RequestInit = {
    method: "POST",
    body: JSON.stringify(body),
    headers,
  };

  return fetch(url, requestInit);
}

export default createParkSlot;
