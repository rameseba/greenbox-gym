$destRoot = "C:\Users\RAMESEBA\Documents\1.WEBS\GreenBox\public"
$destCoaches = "C:\Users\RAMESEBA\Documents\1.WEBS\GreenBox\public\coaches"

# Ensure directories exist
if (!(Test-Path $destCoaches)) { New-Item -ItemType Directory -Path $destCoaches }

# 1. Handle Desktop files
$desktopFiles = Get-ChildItem "C:\Users\RAMESEBA\Downloads\Escritorio"
foreach ($file in $desktopFiles) {
    if ($file.Name -like "coach*") {
        Copy-Item $file.FullName (Join-Path $destCoaches $file.Name) -Force
        Write-Host "Copied to Coaches: $($file.Name)"
    } else {
        Copy-Item $file.FullName (Join-Path $destRoot $file.Name) -Force
        Write-Host "Copied to Public: $($file.Name)"
    }
}

# 2. Handle Mobile files (Renaming with -m)
$mobileFiles = Get-ChildItem "C:\Users\RAMESEBA\Downloads\Mobiles"
foreach ($file in $mobileFiles) {
    $newName = $file.BaseName + "-m" + $file.Extension
    if ($file.Name -like "coach*") {
        Copy-Item $file.FullName (Join-Path $destCoaches $newName) -Force
        Write-Host "Renamed and Copied to Coaches: $newName"
    } else {
        Copy-Item $file.FullName (Join-Path $destRoot $newName) -Force
        Write-Host "Renamed and Copied to Public: $newName"
    }
}

Write-Host "Movement and renaming completed successfully."
