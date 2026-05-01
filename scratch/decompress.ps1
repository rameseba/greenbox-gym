$p1 = 'C:\Users\RAMESEBA\Desktop\Trace-20260430T215736.json.gz'
$p2 = 'C:\Users\RAMESEBA\Documents\1.WEBS\GreenBox\scratch\Trace.json'
$s1 = New-Object System.IO.FileStream($p1, [System.IO.FileMode]::Open)
$s2 = New-Object System.IO.FileStream($p2, [System.IO.FileMode]::Create)
$gz = New-Object System.IO.Compression.GZipStream($s1, [System.IO.Compression.CompressionMode]::Decompress)
$gz.CopyTo($s2)
$gz.Close()
$s1.Close()
$s2.Close()
Write-Host "Done"
