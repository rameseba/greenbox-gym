import zipfile
import os

zip_path = 'backup_clean.zip'
ignore_folders = ['node_modules', 'dist', '.git', 'tools', 'venv', '.env']
ignore_files = [zip_path, 'backup_original.zip', 'setup_repo.py']

print(f"Creating backup in {zip_path}...")
with zipfile.ZipFile(zip_path, 'w', zipfile.ZIP_DEFLATED) as zipf:
    for root, dirs, files in os.walk('.'):
        # Excluir carpetas ignoradas
        dirs[:] = [d for d in dirs if d not in ignore_folders]
        
        for file in files:
            if file in ignore_files:
                continue
            file_path = os.path.join(root, file)
            zipf.write(file_path, os.path.relpath(file_path, '.'))

print("Backup created successfully!")
