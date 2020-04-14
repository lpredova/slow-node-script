#sh

## sleep in bash for loop ##
for i in {1..5}
do
    echo "Hostname : $(hostname)" >> "./test.txt"
    sleep 5s
done
