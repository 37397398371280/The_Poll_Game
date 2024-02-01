def generate_getapi(user_option):
    getapi = ["Host Options"]
    getapi.remove(user_option)
    return getapi

def write_to_js_file(getapi):
    with open("getapi.js", "w") as js_file:
        js_file.write("const getapi = ")
        js_file.write(str(getapi))
        js_file.write(";")

if __name__ == "__main__":
    user_option = input("Please select your option (Host Options): ").strip().upper()
    getapi = generate_getapi(user_option)
    write_to_js_file(getapi)
