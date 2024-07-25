import re

def FDollar2(DollarValue):
    # Function will accept a value and format it to $#,###.##.

    DollarValueStr = "${:,.2f}".format(DollarValue)

    return DollarValueStr


def FDollar0(DollarValue):
    # Function will accept a value and format it to $#,###.##.

    DollarValueStr = "${:,.0f}".format(DollarValue)

    return DollarValueStr


def FComma2(Value):
    # Function will accept a value and format it to $#,###.##.

    ValueStr = "{:,.2f}".format(Value)

    return ValueStr


def FComma0(Value):
    # Function will accept a value and format it to $#,###.##.

    ValueStr = "{:,.0f}".format(Value)

    return ValueStr


def FNumber0(Value):
    # Function will accept a value and format it to $#,###.##.

    ValueStr = "{:.0f}".format(Value)

    return ValueStr


def FNumber1(Value):
    # Function will accept a value and format it to $#,###.##.

    ValueStr = "{:.1f}".format(Value)

    return ValueStr


def FNumber2(Value):
    # Function will accept a value and format it to $#,###.##.

    ValueStr = "{:.2f}".format(Value)

    return ValueStr


def FDateS(DateValue):
    # Function will accept a value and format it to yyyy-mm-dd.

    DateValueStr = DateValue.strftime("%Y-%m-%d")

    return DateValueStr


def FDateM(DateValue):
    # Function will accept a value and format it to dd-Mon-yy.

    DateValueStr = DateValue.strftime("%d-%b-%y")

    return DateValueStr


def FDateL(DateValue):
    # Function will accept a value and format it to Day, Month dd, yyyy.

    DateValueStr = DateValue.strftime("%A, %B %d, %Y")

    return DateValueStr

def is_integer(value): #Validation to check if value is an int
    try:
        int(value)
        return True
    except ValueError:
        return False
    
def validate_name(name):
    if not name.strip(): #strip leading and trailing spaces and then check if the resulting string is empty
        return False  
    if not all(char.isalpha() for char in name): # checks to see if its all characters
        return False 
    return True

def validate_postal_code(PostalCode):   #Could change it so it could accept examples a1b-1b3 or a1b 1b3 instead of just a1b1b3
    Pattern = r'^[A-Za-z]\d[A-Za-z]\d[A-Za-z]\d$' #'^' signifies the start of the line then input has to follow pattern [A-Za-z] accepted letters | \d digits then repeat
    if re.match(Pattern, PostalCode): #Have to import re to use this function
        return True
    else:
        return False
    
def validate_phone_number(PhoneNumber): #Could change to include -'s or something like this example (709) 782-7208
    Pattern = r"^\d{10}$" #Pattern of digits 10 numbers long ^ is the line start $ is the line end

    if re.match(Pattern, PhoneNumber):
        return True
    else:
        return False
    
def validate_city(city):
    if not isinstance(city, str):
        return False
    if not city.strip():
        return False
    if not all(char.isalpha() or char.isspace() or char in ("'", "-") for char in city):
        return False
    return True

def validate_street_address(address): #Pattern of number > Street name followed by a series of potentional endings of street. Could be improved by allowing a continued series of text for an example like 100 Dogtown St - Building 1 Apartment 034
    pattern = r"^[0-9]+\s+([a-zA-Z]+|[a-zA-Z]+\s[a-zA-Z]+)\s(Street|St|Avenue|Ave|Road|Rd|Boulevard|Blvd|Drive|Dr|Court|Ct|Lane|Ln|Way|Plaza|Terrace|Trail|Parkway|Place|Pl|street|st|avenue|ave|road|rd|boulevard|blvd|drive|dr|court|ct|lane|ln|way|plaza|terrace|trail|parkway|place|pl)$"
    if re.match(pattern, address):
        return True
    else:
        return False
    