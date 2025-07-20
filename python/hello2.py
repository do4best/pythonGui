import sys
from PyQt6.QtWidgets import QApplication,QWidget,QLabel,QPushButton,QLineEdit,QMessageBox
from PyQt6.QtCore import Qt
from PyQt6.QtGui import QFont
class DisplayMessageBox(QWidget):
    def __init__(self):
        super().__init__()
        labelauthore = QLabel("SearchAuthore",self)
        labelauthore.move(20,20)
        labelauthore.setFont(QFont("Arial",20))
        
        labelAuth = QLabel("Enter the name you are searching for :",self)
        labelAuth.move(40,60)
        authrerName = QLabel("Name: ",self)
        authrerName.move(50,90)
        self.authEntry = QLineEdit(self)
        self.authEntry.move(95,90)
        self.authEntry.resize(240,20)
        self.authEntry.setPlaceholderText("First Name & Last Name")
        #search Button
        searchButton = QPushButton("Search",self)
        searchButton.move(125,130)
        searchButton.resize(150,40)
        searchButton.clicked.connect(self.displayMessage)
        
        self.setGeometry(100,100,400,300)
        
        self.show()
    def displayMessage(self):
        try:
            with open("Auther.txt", "r") as f:
                authors = [line.rstrip('\n') for line in f]
        except FileNotFoundError:
            QMessageBox.critical(self, "Error", "File Cannot be found")
            return

        if self.authEntry.text() in authors:
            QMessageBox.information(self, "Author Found", "Author Found in Catalog", QMessageBox.StandardButton.Ok)
        else:
            notFound = QMessageBox.question(
                self,
                "Author not Found",
                "Author not found\nDo you wish to continue?",
                QMessageBox.StandardButton.Yes | QMessageBox.StandardButton.No,
                QMessageBox.StandardButton.No
            )
            if notFound == QMessageBox.StandardButton.No:
                print("Closing Operation")
                self.close()
        
if __name__ == "__main__":
    app = QApplication([])
    window = DisplayMessageBox()
    sys.exit(app.exec())