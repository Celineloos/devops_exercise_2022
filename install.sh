if [ ${ENV} = "DEV" ]; then 
    composer install
else
    npm install
fi