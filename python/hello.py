import sys
from PyQt6.QtWidgets import QApplication,QWidget,QLabel,QPushButton,QLineEdit
from PyQt6.QtCore import Qt
class Empty(QWidget):
    def __init__(self):
        super().__init__()
        QLabel("Please Enter Your Name",self).move(100,10)
        QLabel("Name: ",self).move(70,50)
        self.edit_entry = QLineEdit(self)
        self.edit_entry.setAlignment(Qt.AlignmentFlag.AlignLeft)
        self.edit_entry.move(130,50)
        self.edit_entry.resize(200,20)
        self.btn = QPushButton("Clear",self)
        self.btn.clicked.connect(self.clearEntries)
        self.btn.move(16,10)
        
        self.setGeometry(100,100,400,300)
        
        self.show()
        
    def clearEntries(self):
        print("Window is closed")
        sender = self.sender()
        try:
            if sender.text() == "Clear":
                self.edit_entry.clear()
        except Exception as e:
            print("not working correctly",e)
            
     
        
if __name__ == "__main__":
    app = QApplication(sys.argv)
    window = Empty()
    sys.exit(app.exec())