# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN ♥️

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

# input: an array of words and a single letter
# output:  an array of all the words containing that particular letter
# pseudo: well this looks mighty familiar... Pretty sure there's a method that just does this in ruby.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

def vending_machine (input, letter)
    tastyBeverage = input.select { |input| input.include?(letter)}  # ***| P I P E S |***
end
p vending_machine(beverages_array, letter_t)

# ***Basically used the same code in the Javascript portion of this week's assessment. no need to downcase anything since this particular vending machine doesn't believe in capitalization. I'm SUPER jealous of those asian countries that have vending machines with hot drinks in em, BTW.***

# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Rhode Island'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] 

states_array = us_states.values.flatten.sort  # ***C-C-C-COMBO!***
p states_array

#  ***I accidentally learned flatten last week, IIRC. Flatten is definitely the Protag in this one, de-nests levels of a hash and can even specify how deep you want it to reach. .values is just telling it what to look for, and .sort automatically alphabetizes string arrays. Ruby == cheating.***

# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

class Bike
    attr_accessor :model, :current_speed
    def initialize(model)
        @model = model
        @wheels = 2
        @current_speed = 0
    end
    def bike_info
        if @current_speed == 0
            p "Your #{@model} currently has #{@wheels} wheels, and is going nowhere quickly at #{@current_speed} mph. Ride safe."
        elsif @current_speed < 10 && @current_speed > 0
            p "Your #{@model} currently has #{@wheels} wheels, and is going a smooth #{@current_speed} mph. We cruisin'."
        elsif @current_speed > 10 && @current_speed < 20
            p "Your #{@model} currently has #{@wheels} wheels, and is going a brisk #{@current_speed} mph. We movin'."
        else @current_speed > 20
            p "Your #{@model} currently has #{@wheels} wheels, and is going #{@current_speed} mph! Hit the brakes!"
        end
    end
    def pedal_faster(cardio_time)
        if @wheels > 1
       @current_speed += cardio_time
        elsif
            p "I'm not a unicycle, bub."
        end
    end
    def brake(dont_crash)
        if @current_speed > 20
            @current_speed = 0
            @wheels = 1
            p "Too much speed! You fail to slow down in time and hit a tree. you now have #{@wheels} wheel, and a concussion."
        elsif
        @current_speed -= dont_crash
        end
    end
end

wide_boi = Bike.new("Wide-boi Cruiser")
wide_boi.pedal_faster(21)
wide_boi.bike_info
wide_boi.brake(3)
wide_boi.bike_info
wide_boi.pedal_faster(10)

#  ***ok, may have gotten a bit sidetracked. still does what both questions ask for, but tossed in a few conditionals based on current_speed. I was gonna add a way to fix that broken wheel, but now I'm just goofing around so I should stop.***

# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0
