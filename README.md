# Wordle clone
### Practice project to recreate the word guessing game Wordle.


## Build Commands

> docker run --rm -it -v "$(pwd)":/app -p "3000:3000" wordle-clone:latest bash

> docker build -t wordle-clone .

> docker run \
> --name wordle-clone \
> --rm \
> --tty \
> --interactive \
> --mount type=bind,src="$(pwd)",dst=/app \
> --publish "3000:3000" \
> wordle-clone:latest \
> bash
