$trace = Get-Content -Path 'scratch/Trace.json' -Raw | ConvertFrom-Json
$events = $trace.traceEvents

# Get Navigation Start
$navStart = $events | Where-Object { $_.name -eq 'navigationStart' -and $_.args.data.documentLoaderURL -like '*greenbox*' } | Select-Object -First 1

if ($navStart) {
    $startTs = $navStart.ts
    Write-Host "Navigation Start TS: $startTs"

    # Get FCP
    $fcp = $events | Where-Object { $_.name -eq 'firstContentfulPaint' } | Select-Object -First 1
    if ($fcp) {
        $fcpTime = ($fcp.ts - $startTs) / 1000
        Write-Host "FCP: $fcpTime ms"
    }

    # Get LCP
    $lcp = $events | Where-Object { $_.name -eq 'largestContentfulPaint::Candidate' } | Sort-Object ts -Descending | Select-Object -First 1
    if ($lcp) {
        $lcpTime = ($lcp.ts - $startTs) / 1000
        Write-Host "LCP Candidate (Latest): $lcpTime ms"
    }
} else {
    Write-Host "Navigation start not found for greenbox"
}
