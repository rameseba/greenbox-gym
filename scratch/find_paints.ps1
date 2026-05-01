$trace = Get-Content -Path 'scratch/Trace.json' -Raw | ConvertFrom-Json
$events = $trace.traceEvents

# Find all events that have "Paint" in their name
$paintEvents = $events | Where-Object { $_.name -like '*Paint*' }
$paintEvents | Select-Object name, ts, ph, cat | Format-Table -AutoSize

# Find Navigation Start
$navStart = $events | Where-Object { $_.name -eq 'navigationStart' } | Select-Object -First 1
if ($navStart) {
    Write-Host "Nav Start: $($navStart.ts)"
}
