import { createSwaggerSpec } from "next-swagger-doc";

export const getApiDocs = () => {
  const spec = createSwaggerSpec({
    apiFolder: "app/api",
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Music app API docs NextJS",
        version: "1.0",
      },
      servers: [
        {
          url: process.env.NEXT_PUBLIC_BASE_URL as string,
        },
      ],
      components: {
        securitySchemes: {
          BearerAuth: {
            type: "http",
            scheme: "bearer",
            bearerFormat: "JWT",
          },
        },
        schemas: {
          Song: {
            type: "object",
            properties: {
              artistName: { type: "string" },
              artworkUrl30: { type: "string" },
              artworkUrl60: { type: "string" },
              artworkUrl100: { type: "string" },
              collectionArtistId: { type: "number" },
              collectionArtistViewUrl: { type: "string" },
              collectionCensoredName: { type: "string" },
              collectionExplicitness: { type: "string" },
              collectionHdPrice: { type: "number" },
              collectionId: { type: "number" },
              collectionName: { type: "string" },
              collectionPrice: { type: "number" },
              collectionViewUrl: { type: "string" },
              contentAdvisoryRating: { type: "string" },
              country: { type: "string" },
              currency: { type: "string" },
              discCount: { type: "number" },
              discNumber: { type: "number" },
              hasITunesExtras: { type: "boolen" },
              kind: { type: "string" },
              longDescription: { type: "string" },
              previewUrl: { type: "string" },
              primaryGenreName: { type: "string" },
              releaseDate: { type: "string" },
              shortDescription: { type: "string" },
              trackCensoredName: { type: "string" },
              trackCount: { type: "number" },
              trackExplicitness: { type: "string" },
              trackHdPrice: { type: "number" },
              trackHdRentalPrice: { type: "number" },
              trackId: { type: "number" },
              trackName: { type: "string" },
              trackNumber: { type: "number" },
              trackPrice: { type: "number" },
              trackRentalPrice: { type: "number" },
              trackTimeMillis: { type: "number" },
              trackViewUrl: { type: "string" },
              wrapperType: { type: "string" },
            },
          },
          NewUserRequest: {
            type: "object",
            properties: {
              email: {
                type: "string",
                required: true,
              },
              name: {
                type: "string",
                required: true,
              },
              password: {
                type: "string",
                required: true,
              },
            },
          },
          NewUserResponse: {
            type: "object",
            properties: {
              id: {
                type: "string",
              },
              name: {
                type: "string",
              },
              email: {
                type: "string",
              },
            },
          },
        },
      },
      security: [],
    },
  });
  return spec;
};
