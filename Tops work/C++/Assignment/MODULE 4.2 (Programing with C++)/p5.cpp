#include <iostream>
using namespace std;
class Cricketer {  // Base class can have its own data and member functions
};

// Derived class
class Batsman : public Cricketer {
public:
    int total_runs;
    float average_runs;
    int best_performance;

        inputData() {   // Function to input data
        cout << "Enter total runs: ";
        cin >> total_runs;
        cout << "Enter best performance: ";
        cin >> best_performance;
    }

    // Function to calculate average runs
     calculateAverage(int matches_played) {
        if (matches_played > 0) {
            average_runs = static_cast<float>(total_runs) / matches_played;
        } else {
            average_runs = 0;
        }
    }

    // Function to display data
     displayData() {
        cout << "Total Runs: " << total_runs << endl;
        cout << "Best Performance: " << best_performance << endl;
        cout << "Average Runs: " << average_runs << endl;
    }
};

main() {
    Batsman b;
    int matches_played;

    b.inputData();
    cout << "Enter number of matches played: ";
    cin >> matches_played;

    b.calculateAverage(matches_played);
    b.displayData();

    return 0;
}

