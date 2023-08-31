echo " 🛠️ - Installing dependencies for custom-library..."
cd custom-library
npm i
echo " "
echo " 🛠️ - Preparing link..."
# this will build and prepare link
npm run link
cd ../app
echo " "
echo " 🛠️ - Installing dependencies for consumer application..."
npm i
echo " "
echo " 🛠️ - Linking..."
npm link custom-library
echo " "
echo " 🛠️ - Starting consumer application"
npm run dev
echo " "
echo " ✅ - Well done, ow you're using a local library previouly bundled"