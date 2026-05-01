$trace = Get-Content -Path 'scratch/Trace.json' -Raw | ConvertFrom-Json
$events = $trace.traceEvents

# Find long tasks (> 50ms = 50000 us)
$longTasks = $events | Where-Object { $_.name -eq 'RunTask' -and $_.dur -gt 50000 }
$longTasks | Select-Object ts, dur, tid | Format-Table -AutoSize
