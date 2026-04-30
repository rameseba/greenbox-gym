import zipfile
import os

zip_path = 'backup_original.zip'
ignore_list = [zip_path, 'setup_repo.py', '.git']

print(f"Creating backup in {zip_path}...")
with zipfile.ZipFile(zip_path, 'w', zipfile.ZIP_DEFLATED) as zipf:
    for root, dirs, files in os.walk('.'):
        for file in files:
            if file in ignore_list:
                continue
            file_path = os.path.join(root, file)
            zipf.write(file_path, os.path.relpath(file_path, '.'))

print("Backup created successfully!")
