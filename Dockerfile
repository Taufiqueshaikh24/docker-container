FROM node:15
WORKDIR /app 
COPY package.json .
RUN npm i

# if else for prod and dev environment
# ARG NODE_ENV
# RUN if [ "$NODE_ENV" = "development"] ; \
#         then npm i ; \
#         else npm i --only=production ; \
#         fi

# for production install otherwise it will also install the dev dependencies or we can do this 
# RUN npm i --only=production
COPY . ./
EXPOSE 4000
CMD [ "npm" , "run" , "dev" ]