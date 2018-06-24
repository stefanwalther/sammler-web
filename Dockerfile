# Create image based off of the official Node 6 image
FROM node:6@sha256:72e3854d241d22e0bd35fd64e1ec1a8fddf79ca947dc44ce63e7ce1a29115e55

# Create a directory where our app will be placed
RUN mkdir -p /usr/src/app

# Change directory so that our commands run inside this new dir
WORKDIR /usr/src/app

# Copy dependency definitions
COPY package.json /usr/src/app

# Install dependecies
RUN npm install

# Fix for now
RUN rm -rf /user/src/app/node_modules/angular_cli/node_modules/extract-text-webpack-plugin && \
    npm install extract-text-webpack-plugin@2.0.0-rc.0 --save-dev

# Get all the code needed to run the app
COPY . /usr/src/app

# Expose the port the app runs in
EXPOSE 4200

# Serve the app
CMD ["npm", "start"]
