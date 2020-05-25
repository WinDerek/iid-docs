all: ;
	npm run build
	rm -r ~/iid_server_doc/*
	mv ./dist/* ~/iid_server_doc/
