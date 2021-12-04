 <?php
                        if($_SERVER['REQUEST_METHOD'] == "POST" and isset($_POST['someAction']))
                        {
                            func();
                        }
                        function func()
                        {
                            shell_exec("/beegfs/work/aviseth/job_scripts/data_shuffler.slm");   
                        }
                        ?>