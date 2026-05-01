$trace = Get-Content -Path 'scratch/Trace.json' -Raw | ConvertFrom-Json
$events = $trace.traceEvents
$start = 15308133727
$end = $start + 818324

$subEvents = $events | Where-Object { $_.ts -ge $start -and $_.ts -le $end -and $_.name -eq 'EvaluateScript' }
$subEvents | Select-Object name, dur, @{Name='url'; Expression={$_.args.data.url}} | Format-Table -AutoSize
