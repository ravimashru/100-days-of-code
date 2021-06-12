""" Node is defined as
class node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None
"""

def checkBST(root):
    
    def checkRange(node, min_value, max_value):
        if node == None:
            return True
        
        if node.data <= min_value or node.data >= max_value:
            return False
        
        return checkRange(node.left, min_value, node.data) and\
                checkRange(node.right, node.data, max_value)
    
    # 0 <= data <= 10^4
    return checkRange(root, -1, 10001)
    