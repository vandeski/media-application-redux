import { Media } from "../types/Media";
const baseUrl = "http://localhost:4000";
const url = `${baseUrl}/mediaList`;

function translateStatusToErrorMessage(status: number) {
  switch (status) {
    case 404:
      return "Could not find Media object.";
    case 500:
      return "Something has gone worng with the server.";
    default:
      return "There was an error retrieving the media object(s). Please try again.";
  }
}

function checkStatus(response: any) {
  if (response.ok) {
    return response;
  } else {
    const httpErrorInfo = {
      status: response.status,
      statusText: response.statusText,
      url: response.url,
    };
    console.log(`log server http error: ${JSON.stringify(httpErrorInfo)}`);

    let errorMessage = translateStatusToErrorMessage(httpErrorInfo.status);
    throw new Error(errorMessage);
  }
}

function parseJSON(response: Response) {
  return response.json();
}

function convertToProjectModels(data: any[]): Media[] {
  let media: Media[] = data.map(convertToMediaModel);
  return media;
}

function convertToMediaModel(item: any): Media {
  return new Media(item);
}

const mediaAPI = {
  async post(media: Media) {
    try {
      const response = await fetch(`${url}`, {
        method: "POST",
        body: JSON.stringify(media),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const response_1 = await checkStatus(response);
      return parseJSON(response_1);
    } catch (error) {
      console.log("log client error " + error);
      throw new Error(
        "There was an error creating the new Media objects. Please try again."
      );
    }
  },

  async get() {
    try {
      const response = await fetch(`${url}`);
      const response_1 = await checkStatus(response);
      const data = await parseJSON(response_1);
      return convertToProjectModels(data);
    } catch (error) {
      console.log("log client error " + error);
      throw new Error(
        "There was an error retrieving the Media objects. Please try again."
      );
    }
  },

  async put(media: Media) {
    try {
      const response = await fetch(`${url}/${media.id}`, {
        method: "PUT",
        body: JSON.stringify(media),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const response_1 = await checkStatus(response);
      return parseJSON(response_1);
    } catch (error) {
      console.log("log client error " + error);
      throw new Error(
        "There was an error updating the Media object. Please try again."
      );
    }
  },

  async delete(media: Media) {
    try {
      const response = await fetch(`${url}/${media.id}`, {
        method: "DELETE",
        body: JSON.stringify(media),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const response_1 = await checkStatus(response);
      return parseJSON(response_1);
    } catch (error) {
      console.log("log client error " + error);
      throw new Error(
        "There was an error deleting the Media object. Please try again."
      );
    }
  },
};

export { mediaAPI };
