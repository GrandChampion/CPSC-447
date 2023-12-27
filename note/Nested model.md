# Analysis about user of visualization

$$
{Algorithm}\subset {Idiom}\subset {Abstraction}\subset {Domain}
$$

* Problem driven work: working down 4 levels
* 4 levels
    1. Domain level: analyzing target user (Example: Physicist, Chemist)
        * wrong way to do this level: mistunderstand the need of user
        * solution and validation when the level is wrong
            * measure how many people use the visualization
    2. Abstract level
        * Data abstraction: what will be shown in the visualization.
        * Task abstraction: why user wants to use the visualization.
        * wrong way to do this level: abstraction of data is wrong.
        * solution and validation when the level is wrong
            * observe user after deploying the visualization(field study)
    3. Idiom level
        * visual encoding: how to encode data
        * interaction: how to manipulate visualization
        * wrong way to do this level: user can't decode what is encoded in the visualization
        * solution and validation when the level is wrong
            * validate if the alternative idiom was better
            * measure human time of understanding the visualization in a lab
    4. algorithm level
        * finding efficient way to compute data
        * wrong way to do this level: algorithm is running slow or not working
        * solution and validation when the level is wrong
            * benchmark
            * analyze computational complexity
* First: going down the level from domain level to algorithm level, there is cascading effect(previous level affecting the next level)
* Iteratively: refine each level

