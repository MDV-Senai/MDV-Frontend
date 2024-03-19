FROM node:20

WORKDIR /app

COPY . .

EXPOSE 5173

CMD ["tail", "-f", "/dev/null"]



