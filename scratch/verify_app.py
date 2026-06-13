import json
import os

json_path = r"c:\Users\vanda\Downloads\nss\schemes.json"

print("Starting validation of schemes.json...")

if not os.path.exists(json_path):
    print("FAILED: File does not exist!")
    exit(1)

try:
    with open(json_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
except Exception as e:
    print(f"FAILED: JSON load failed: {e}")
    exit(1)

if not isinstance(data, list):
    print("FAILED: Top level is not a list!")
    exit(1)

print(f"Loaded {len(data)} schemes.")

required_keys = ["id", "name", "description", "eligibility_rules", "benefits", "documents"]
required_langs = ["en", "hi", "ta"]
rule_keys = ["min_age", "max_age", "gender", "occupations", "max_income", "needs_land"]

errors = 0

for idx, scheme in enumerate(data):
    s_id = scheme.get("id", f"INDEX_{idx}")
    print(f"\nValidating scheme '{s_id}'...")
    
    # Check main keys
    for key in required_keys:
        if key not in scheme:
            print(f"  ERROR: Missing main key '{key}'")
            errors += 1
            
    # Check translations for text fields
    for text_key in ["name", "description", "benefits", "documents"]:
        if text_key in scheme:
            val = scheme[text_key]
            if not isinstance(val, dict):
                print(f"  ERROR: Key '{text_key}' is not a dictionary!")
                errors += 1
                continue
            for lang in required_langs:
                if lang not in val:
                    print(f"  ERROR: Key '{text_key}' is missing translation for '{lang}'")
                    errors += 1
                    
    # Check eligibility rules structural keys
    rules = scheme.get("eligibility_rules", {})
    if rules:
        for rkey in rule_keys:
            if rkey not in rules:
                print(f"  ERROR: Missing eligibility rule key '{rkey}'")
                errors += 1
                
        # Check occupations type
        if "occupations" in rules and not isinstance(rules["occupations"], list):
            print(f"  ERROR: 'occupations' rule is not a list!")
            errors += 1
            
if errors == 0:
    print("\nSUCCESS: schemes.json is valid and structured perfectly!")
else:
    print(f"\nFAILED: schemes.json has {errors} validation errors!")
    exit(1)
