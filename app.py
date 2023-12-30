from flask import Flask, render_template, url_for, request  # Imports flask library and associated tools
from func.mc_count import count

app = Flask(__name__) # Instantiates Flask app
img_dir = "https://talikebennett.com/static/img/" # Directory to image folder (since using relative paths for the Open Graph image preview doesn't work)

# Home page
@app.route("/")
def home():
    return render_template(
        "home.html", 
        title="Talike's Portfolio", 
        desc="This website is a portfolio of work done by me",
        css="home",
        js="home",
        page_img=f"{img_dir}talike9.jpg")

# About Me page
@app.route("/about-me")
def about_me():
    return render_template(
        "about_me.html", 
        title="About Me", 
        desc="A little bit about me, my education, and my extracurricular experience",
        css="about_me",
        js="about_me",
        page_img=f"{img_dir}talike10.jpg")

# Mini Comics page
@app.route("/mini-comics")
def mc():
    return render_template(
        "mc.html", 
        title="Mini Comics", 
        desc="Comics galore!",
        css="mc",
        js="mc",
        page_img=f"{img_dir}tpmc_logo.jpg")

# Route to return the number of pictures for a specific comic
@app.route("/mc_list/<num>")
def mc_list(num):
    return count(num)

# Projects page
@app.route("/projects")
def projects():
    return render_template(
        "projects.html", 
        title="Projects", 
        desc="A list of my best projects over the years",
        css="projects",
        js="projects",
        page_img=f"{img_dir}itz.png")

# Runs Flask app
if __name__ == "__main__":
    app.run(debug=True)
