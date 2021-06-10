# Breadth-First Search Algorithm

## (Using Adjacency Matrix)

![im1](https://miro.medium.com/max/2400/1*TMZAR1b_5Jbx4_vA28Q25g@2x.jpeg)

### Introduction

Breadth-First Search is an algorithm to traverse or search in a graph data structure. In this algorithm, we are given a vertex of the graph and we first traverse all the vertexes that are connected to that vertex, After that, do the same with all the vertexes that are connected with this vertex, and so on keep repeating until all the nodes that are connected to the starting given node (directly or indirectly) get visited.

What is the Adjacency Matrix representation of a graph?

Let's say we have the vertexes of a graph : (consider a list of characters, each character representing a vertex)



~~~js
[ 'A', 'B', 'C', 'D', 'E']
~~~
 ![im2](https://res.cloudinary.com/rupamcloud/image/upload/v1609503498/qoverflow/graph%2Bdfs.png1609503498404.png)

Above you can see is a directed graph. To represent it using a matrix we can do it like this:
![im3](https://res.cloudinary.com/rupamcloud/image/upload/v1609347003/qoverflow/graph_bfs.png1609347003077.png)
In this above matrix, we put 1 when they are connected otherwise 0.

The vertex A is connected with B, C, and D. So at the first row we have 1 bellow B, C, and D. The first row is for vertex A.

Similarly, for vertex B which is connected with D and E, we have 1 below D and E of the second row. Same for other vertexes.

Now for Breadth-first search:

If we start at A, (A is visited since it is the starting)

we will visit all its connected vertexes which are B, C, D.

Then we take B and visits its connected vertexes which are D and E. since D is already visited we ignore it.

Then we take C and try to visit its connected vertexes which is D only and since it is already visited we also ignore it.

Then moving to D we got E which is also visited so we ignore it as well.

So finally we get:
A B C D E
as our visited nodes.
Let's see the program now in C:
We have a graph of total 5 vertexes which are:


~~~c
char vertexs[5] = {'A', 'B', 'C', 'D', 'E'};
and the Adjacency Matrix
    int adj[5][5] = {
        // A, B, C, D, E
        {0, 1, 1, 1, 0}, // A
        {0, 0, 0, 1, 1}, // B
        {0, 0, 0, 1, 0}, // C
        {0, 0, 0, 0, 1}, // D
        {0, 0, 0, 0, 0}  // E
    };

~~~
Now The Function to implement BFS:
We will use a queue to implement it

~~~txt
step:0-> visit the starting vertex
step:1-> Take a queue and enqueue the starting vertex. 
step:2-> dequeue from the array 
step:3-> for this dequeued vertex, visit all the vertexes that are connected (ie 1) and are not visited.
step:4-> while visiting these vertexes enqueue them to the queue and marked as visited
step:5-> repeat step 1 up to 4 until the queue is empty
~~~
Now The function is:
~~~c
void BFS(const int size, char *vertexs, int adj[][size], int start)
{
    // the queue to reference the vertex by holding the indices of  vertex fron vertexs array
    int queue[size];
    int front = 0, rear = 0;
    //the array to keep track of the visited vertex by storing 1 at the position of the visited vertexes from vertexs array
    int visited[size];
    memset(visited, 0, size * sizeof(visited[0])); //initially none is visited so all are set to 0
    //enqueue the index of the starter node
    queue[rear] = start;
    //print the starter vertex
    printf("%c ", vertexs[start]);
    //mark starter vertex as visited
    visited[start] = 1;
    while (front <= rear) //until the queue is empty
    { 
        //dequeue  the queue
        int v = queue[front]; // v holds the position of the current vertex
        front++;
        for (int i = 1; i < size; i++) //travers the adjucency list for this node
        {
            if (adj[v][i] == 1 && visited[i] == 0)
            {
                printf("%c ", vertexs[i]);
                //mark it as visited
                visited[i] = 1;
                //Enqueue the visited node  so that we can get the adjucency list of it later
                rear++;
                queue[rear] = i;
            }
        }
    }
}
~~~
We can use at as: 
~~~c
int main()
{
    char vertexs[SIZE] = {'A', 'B', 'C', 'D', 'E'};
    int adj[SIZE][SIZE] = {
        // A, B, C, D, E
        {0, 1, 1, 1, 0}, // A
        {0, 0, 0, 1, 1}, // B
        {0, 0, 0, 1, 0}, // C
        {0, 0, 0, 0, 1}, // D
        {0, 0, 0, 0, 0}  // E
    };
    BFS(SIZE, vertexs, adj, 3);
    return 0;
}
~~~
