import urllib.request
import zipfile
import os
import shutil

url = "https://github.com/rameseba/Greenbox_ve/archive/refs/heads/main.zip"
zip_path = "repo.zip"
extract_path = "."

print(f"Downloading {url}...")
urllib.request.urlretrieve(url, zip_path)

print(f"Extracting {zip_path}...")
with zipfile.ZipFile(zip_path, 'r') as zip_ref:
    zip_ref.extractall(extract_path)

# The zip usually contains a folder like Greenbox_ve-main
extracted_folder = [f for f in os.listdir(extract_path) if os.path.isdir(f) and f.startswith("Greenbox_ve")][0]
source_folder = os.path.join(extract_path, extracted_folder)

print(f"Moving files from {source_folder} to {extract_path}...")
for item in os.listdir(source_folder):
    s = os.path.join(source_folder, item)
    d = os.path.join(extract_path, item)
    if os.path.exists(d):
        if os.path.isdir(d):
            shutil.rmtree(d)
        else:
            os.remove(d)
    shutil.move(s, d)

os.rmdir(source_folder)
os.remove(zip_path)
print("Done!")
