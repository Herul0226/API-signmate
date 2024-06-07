# Menggunakan Node.js sebagai base image
FROM node:20

# Set working directory
WORKDIR /usr/src/app

# Copy package.json dan package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy seluruh kode sumber
COPY . .

# Expose port 8080
EXPOSE 3000

# Jalankan aplikasi
CMD ["node", "index.js"]
