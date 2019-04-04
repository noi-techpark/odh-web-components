# odh-web-components
Common repository for all web-components created in line with the opendatahub project.

All additons and constributions need to made through pull requests. Only opendatahub-core member will have write permissions for this repositories and will be the once to review contributions and check if guidelines are being followed.

## Guidelines

1. ***Contributions:*** Fork the repository  and send your contributions through pull-requests. Don't work on the master branch, but on a **feature branch**. As soon as you have something that can be shown/tested **open a pull-request** to our **development** branch. You will see if it is compliant through our CI, which will tell you on the commit with a checkmark if it passed or not. If it's not passing try to rebase your changes using the development branch of our repository. As long as we don't accept your pull-request, you can commit to your feature branch and they will automatically flow into the pull-request.
It's the same way we do in our core project: https://opendatahub.readthedocs.io/en/latest/contributors.html
2. ***Package management:*** We expect you to use **npm** as package management tool, so that we can create generic pipelines for CI, testing and production deployment.
3. ***Continuous integration:*** for each web component we need automatic checks if the minimum requirements are met and will therefore do some basic routine checks like if the folder you pushed is empty, or if there are no javascript files. Furthermore we will try to run your tests with npm(if you were diligent enought to write some :clap: )
4. ***Naming:*** Work in one single root-folder which should follow this naming convention:`odh-[topic]-[functionality]` e.g.: *odh-emobility-echarging-display*. Also only use lowercase character divided by `-`.

For more informations write to info@opendatahub.bz.it

  

