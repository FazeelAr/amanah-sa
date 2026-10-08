Add-Type -AssemblyName System.Drawing
$srcPath = "e:\Web\NextJS\aim-oc\public\aim_logo.png"
$destPath = "e:\Web\NextJS\aim-oc\public\aim_logo_circle.png"

$src = [System.Drawing.Image]::FromFile($srcPath)
$bmp = New-Object System.Drawing.Bitmap 128, 128
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias

# Clear background
$g.Clear([System.Drawing.Color]::Transparent)

# Fill white circle
$brush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White)
$g.FillEllipse($brush, 2, 2, 124, 124)

# Draw light gray border (Slate-100 equivalent: #F1F5F9 or similar #E2E8F0)
$pen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(255, 226, 232, 240), 4)
$g.DrawEllipse($pen, 2, 2, 124, 124)

# Create a circular clipping path for the logo
$path = New-Object System.Drawing.Drawing2D.GraphicsPath
$path.AddEllipse(12, 12, 104, 104)
$g.SetClip($path)

# Draw the logo
$g.DrawImage($src, 12, 12, 104, 104)

# Clean up
$src.Dispose()
$g.Dispose()

# Save as PNG
$bmp.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()
Write-Host "Circular PNG saved successfully to $destPath"
