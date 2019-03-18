yarn build
cp public/favicon.ico build
ssh notexists.top 'mkdir -p release/cc'
scp -r build/* notexists.top:release/cc
