import random

def generate_poll_results(user_option):
    options = [user_option]
    results = {user_option: random.randint(1, 100)}
    return results

def display_results(results, user_option):
    print(f"You selected: {user_option}")
    print("Poll Results:")
    for option, count in results.items():
        print(f"{option}: {count} votes")

def get_user_option():
    print("Please enter your option: ")
    user_option = input().strip().upper()
    return user_option

if __name__ == "__main__":
    user_option = get_user_option()
    poll_results = generate_poll_results(user_option)
    display_results(poll_results, user_option)
