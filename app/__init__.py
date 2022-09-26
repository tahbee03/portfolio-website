# START DATE: 6/11/22

from flask import Flask, render_template, url_for  # Import flask library and associated tools

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("home.html")

if __name__ == "__main__":
    app.run(debug=True)