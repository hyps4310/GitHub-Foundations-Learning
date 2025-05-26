docker build -t hello-world .

export GH_USERNAME='hyps4310'
export GH_TOKEN='<Your Token>'
export GH_IMAGE_NAME='hello-world'
export GH_VER='1.0.0'
export GH_TAG_NAME='ghcr.io/$GH_USERNAME$/$GH_IMAGE_NAME:$GH_VER'


echo $GH_TOKEN | docker login ghcr.io -u $GH_USERNAME --password-stdin

docker tag $GH_IMAGE_NAME:latest $GH_TAG_NAME

docker push $GH_TAG_NAME

LABEL org.opencontainers.image.source https://github.com/OWNER/REPO