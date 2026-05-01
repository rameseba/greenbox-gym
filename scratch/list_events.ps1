$trace = Get-Content -Path 'scratch/Trace.json' -Raw | ConvertFrom-Json
$trace.traceEvents.name | Select-Object -Unique | Sort-Object
