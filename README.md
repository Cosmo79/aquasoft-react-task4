# aquasoft-react-task4
Task-ul de frontend presupune realizarea unui proiect React folosind hooks sau clase, care sa cuprinda urmatoarele functionalitati:

1. Pagina principala (ruta /home) va cuprinde un tabel cu proiectele stocate in baza de date.
Ultima coloana din tabel va avea un buton 'View employees'.
2. La click pe acel buton se face redirect catre o componenta care va cuprinde un tabel cu angajatii apartinand proiectului pe care s-a dat click.
3. Tabelul employees va cuprinde functionalitati de add, edit, delete pentru actualizarea in baza de date. Toate modificarile trebuie sa se observe in timp real si pe tabel.
4. Componenta employees va cuprinde butoane pentru sortare in functie de "salary" si "hire_date".

Toate datele provenite din baza de date se vor stoca si se vor accesa cu Redux, iar aplicatia finala se va rula prin docker. Daca terminati aceste task-uri, creati si o componenta pentru autentificare prin Google folosind Firebase. Blocati accesul la celelalte rute daca userul nu s-a autentificat.