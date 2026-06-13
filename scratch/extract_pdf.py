import pypdf
import os
import sys

# Ensure UTF-8 printing in Windows command prompt
if sys.stdout.encoding != 'utf-8':
    sys.stdout.reconfigure(encoding='utf-8')

pdf_path = r"c:\Users\vanda\Downloads\nss\NSS OPEN PROJECTS 2026_removed.pdf"

print("Checking PDF:", pdf_path)
reader = pypdf.PdfReader(pdf_path)

print(f"Total Pages: {len(reader.pages)}")

# Extract Metadata
print("\n--- Metadata ---")
metadata = reader.metadata
for key, val in (metadata or {}).items():
    print(f"{key}: {val}")

# Extract Links and Text from each page
for i, page in enumerate(reader.pages):
    print(f"\n--- Page {i+1} Text ---")
    try:
        print(page.extract_text())
    except Exception as e:
        print(f"Error extracting text: {e}")
    
    print(f"\n--- Page {i+1} Links ---")
    if "/Annots" in page:
        annots = page["/Annots"]
        for annot in annots:
            obj = annot.get_object()
            if "/A" in obj and "/URI" in obj["/A"]:
                print(f"Link: {obj['/A']['/URI']}")
