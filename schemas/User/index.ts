import swaggerJSDoc from "swagger-jsdoc";

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Your API Documentation",
      version: "1.0.0",
      description: "API documentation for your project",
    },
  },
  apis: ["./app/api/**/*.ts"],
  components: {
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
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
