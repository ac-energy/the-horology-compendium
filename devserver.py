import http.server, socketserver, sys

class Handler(http.server.SimpleHTTPRequestHandler):
    extensions_map = {**http.server.SimpleHTTPRequestHandler.extensions_map, '.js': 'text/javascript', '.mjs': 'text/javascript'}

port = int(sys.argv[1]) if len(sys.argv) > 1 else 8812
with socketserver.TCPServer(("", port), Handler) as httpd:
    httpd.serve_forever()
