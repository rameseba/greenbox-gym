$trace = Get-Content -Path 'scratch/Trace.json' -Raw | ConvertFrom-Json
$events = $trace.traceEvents
$start = 15308133727
$end = $start + 818324

$subEvents = $events | Where-Object { $_.ts -ge $start -and $_.ts -le $end -and $_.tid -eq 16200 }
$subEvents | Sort-Object dur -Descending | Select-Object name, dur -First 10 | Format-Table -AutoSize
