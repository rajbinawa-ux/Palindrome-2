def palindrome_berikutnya(n):
    angka = n + 1

    while True:
        if str(angka) == str(angka)[::-1]:
            return angka
        angka += 1


# Input
n = int(input("Masukkan angka: "))

# Output
hasil = palindrome_berikutnya(n)
print("Palindrome berikutnya:", hasil)
