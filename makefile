# Flask

virtualenv_install:
	python3 -m pip install virtualenv

flask_install: DanasBakeri-API-Python/
	python3 -m virtualenv $^venv && python3 -m pip install -r $^requirements.txt

run_flask: DanasBakeri-API-Python/dana.py
	python3 $^

# Node

node_install: DanasBakeri-API-Node/
	cd $^ && npm install && cd ..

run_node: DanasBakeri-API-Node/
	node $^index.js
